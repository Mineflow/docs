function format(text) {
    return text.replace(/\n/g, "<br>");
}

function placeholder(text) {
    return text.replace(/(<|&lt;)[a-zA-Z0-9\s]+(>|&gt;)/g, function (match) {
        return `<span style="color: #aaaaaa">${match}</span>`
    });
}


(function () {
    const plugin = function (hook, vm) {
        hook.afterEach(function (html, next) {
            html = html.replace(/<p>!form<\/p>\s*<pre .+?>\s*<code class="lang-json">\s*((.|\s)+?)\s*<\/code>\s*<\/pre>/g, function (match, value) {
                const data = JSON.parse(value.replace(/(<([^>]+)>)/gi, ''));

                const type = data["type"];
                const title = format(data["title"]);
                if (type === "form") {
                    const content = format(data["content"] || (data["contents"] || []).join("\n"));
                    const buttons = [];
                    for (const button of data["buttons"]) {
                        const selected = button["selected"] || false
                        buttons.push(`<div class="button ${selected ? 'selected' : ''}">${format(button["text"])}</div>`);
                    }
                    return (
                        `<div class="form list">
                        <div class="title">${title}</div>
                        <div class="panel">
                            <div class="scrolling-content">
                                <div class="form-content">${content}</div>
                                ${buttons.join("\n")}
                            </div>
                        </div>
                    </div>`
                    );
                } else if (type === "custom_form") {
                    const contents = [];
                    for (const content of data["content"]) {
                        switch (content["type"]) {
                            case "label":
                                contents.push(
                                    `<label>
                                        <span>${format(placeholder(content['text']))}</span>
                                    </label>`
                                )
                                break;
                            case "input":
                                contents.push(
                                    `<label>
                                        <span>${format(placeholder(content['text']))}</span><br>
                                        <input type="text" value="${content['default'] || ''}" placeholder="${content['placeholder'] || ''}" readonly>
                                    </label>`
                                )
                                break;
                            case "dropdown":
                                const options = [];
                                for (const option of content["options"]) {
                                    options.push(`<option>${format(option)}</option>`);
                                }
                                contents.push(
                                    `<label>
                                        <span>${format(placeholder(content["text"]))}</span><br>
                                        <select disabled>
                                            ${options.join("\n")}
                                        </select>
                                    </label>`
                                )
                                break;
                            case "toggle":
                                contents.push(
                                    `<label class='toggle'>
                                      <input type='checkbox' disabled ${content["default"] ? 'checked' : ''}>
                                      <span class='value'></span>
                                      <span class='text'>${format(content["text"])}</span>
                                    </label>`
                                )
                                break;
                        }
                    }
                    return (
                        `<div class="form custom">
                        <div class="title">${title}</div>
                        <div class="panel">
                            <div class="scrolling-content">
                                ${contents.join("\n")}
                                <div class="button">送信</div>
                            </div>
                        </div>
                    </div>`
                    );
                    /*

            <label>
                <span>&lt;value1&gt; &lt;operator&gt; &lt;value2&gt;</span><br><br>
                <span>&lt;value1&gt; 一つ目の値</span><br>
                <input type="text" value="{time.hours}" readonly>
            </label>
            <label>
                <span>&lt;operator&gt; 演算子</span><br>
                <select disabled>
                    <option>&gt;=</option>
                </select>
            </label>
            <label>
                <span>&lt;value2&gt; 二つ目の値</span><br>
                <input type="text" value="5" readonly>
            </label>
            <label class='toggle'>
              <input type='checkbox' disabled>
              <span class='value'></span>
              <span class='text'>&lt;キャンセルして戻る&gt;</span>
            </label>
            <div class="button">送信</div>
                     */
                } else {
                    return match;
                }
            });

            next(html);
        });
    };

    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}());
