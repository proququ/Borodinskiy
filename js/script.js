        var link = document.querySelector(".login");
        var form_popup = document.querySelector(".modal-content");
        
        var map = document.querySelector(".map-link");
        var map_popup = document.querySelector(".modal-content-map");
        
        var overlay = document.querySelector(".modal-overlay");
        
        var close_form = form_popup.querySelector(".modal-content-close");
        var close_map = map_popup.querySelector(".modal-content-close");
        
        var form = form_popup.querySelector("form"); 
        var login = form_popup.querySelector("[name=user]");
        var password = form_popup.querySelector("[name=password]");

        var storage = localStorage.getItem("login");
        
        
        link.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Клик по ссылке!");
            form_popup.classList.add("modal-content-show");
            form_popup.classList.add("anim");
            overlay.classList.add("modal-content-show");
            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
            }
        });
        
        form.addEventListener("submit", function (event) {
            if (!login.value || !password.value) {
                event.preventDefault();
                console.log("Нужно ввести логин и пароль!")
                form_popup.classList.add("modal-error");
            } else {
                localStorage.setItem("login", login.value);
            }
        });
                
        map.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Клик по ссылке!");
            map_popup.classList.add("modal-content-show");
            map_popup.classList.add("anim");
            overlay.classList.add("modal-content-show");
        });
        
        close_form.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Close form!");
            form_popup.classList.remove("modal-content-show");
            form_popup.classList.remove("anim");
            form_popup.classList.remove("modal-error");
            overlay.classList.remove("modal-content-show");
            
        });
        
        close_map.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Close form!");
            map_popup.classList.remove("modal-content-show");
            map_popup.classList.remove("anim");
            overlay.classList.remove("modal-content-show");
        });
        
        window.addEventListener("keydown", function (event) {
            if (event.keyCode === 27) {
                if (form_popup.classList.contains("modal-content-show")) {
                    form_popup.classList.remove("modal-content-show");
                    overlay.classList.remove("modal-content-show");
                }
            }
        });

        window.addEventListener("keydown", function (event) {
            if (event.keyCode === 27) {
                if (map_popup.classList.contains("modal-content-show")) {
                    map_popup.classList.remove("modal-content-show");
                    overlay.classList.remove("modal-content-show");
                }
            }
        }); 