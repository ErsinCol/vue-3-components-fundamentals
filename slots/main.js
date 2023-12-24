import {createApp} from "vue";

let PageLayoutComponent = {
    template: "#page-layout-template",
}

const app = createApp({
    components: {
        "page-layout": PageLayoutComponent
    }
});

app.mount("#app");