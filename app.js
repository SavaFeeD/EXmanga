const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

function APP () {
    const site = window.location.href

    if (site.includes('vk.com/@')) {
        Add_Custom_Style(`
            figure {
                margin: 0!important;
            }
            figcaption {
                margin: 0!important;
            }
            .article_layer__content_footer {
                visibility: 'hidden'!important;
            }
            .article>figure img {
                width: 100%!important;
            }
        `)
        document.querySelectorAll('.article_figure_content').forEach((item) => item.style = undefined)
    }

    if (site.includes('teletype.in')) {
        Add_Custom_Style(`
            .m_original {
                margin: 0 auto 0!important;
            }
            .contents {
                margin: 0 auto 0!important;
            }
            .menu {
                display: none!important;
            }
            ::-webkit-scrollbar-thumb
            {
                background-color: #AAA;
                border-radius: 10px;
                background-image: -webkit-linear-gradient(90deg,
                rgba(0, 0, 0, .2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(0, 0, 0, .2) 50%,
                rgba(0, 0, 0, .2) 75%,
                transparent 75%,
                transparent)
            }
            ::-webkit-scrollbar
            {
                width: 10px;
                background-color: #424242;
            }
            }
            ::-webkit-scrollbar-track
            {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: #F5F5F5;
                border-radius: 10px;
            }
        `)
    }

    if (site.includes('telegra.ph')) {
        Add_Custom_Style(`
            * {
                color: white!important;
            }
        
            .tl_article .tl_article_content .figure_wrapper img {
                max-height: none!important;
            }
            .tl_article .tl_article_content, .tl_article .tl_article_content .ql-editor * {
                padding: 0!important;
                margin-bottom: 0!important;
                margin-top: 0!important;
            }
            
            .tl_page_wrap {
                background: #111;
            }
            .tl_footer_button {
                background: #111;
            }

            p[dir="auto"] {
                height: 0!important;
            }
            
            ::-webkit-scrollbar-thumb
            {
                background-color: #AAA;
                border-radius: 10px;
                background-image: -webkit-linear-gradient(90deg,
                rgba(0, 0, 0, .2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(0, 0, 0, .2) 50%,
                rgba(0, 0, 0, .2) 75%,
                transparent 75%,
                transparent)
            }
            ::-webkit-scrollbar
            {
                width: 10px;
                background-color: #424242;
            }
            }
            ::-webkit-scrollbar-track
            {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: #F5F5F5;
                border-radius: 10px;
            }
        `)
    }
}
function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);
        for (let code of codes) { // все ли клавиши из набора нажаты?
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });

}

runOnKeys(
    () => APP(),
    "KeyQ",
    "ControlLeft"
);
