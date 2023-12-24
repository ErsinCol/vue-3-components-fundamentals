import {createApp, ref} from "vue";

const app = createApp();

app.component("click-counter", {
    template: "#click-counter-template",
    setup(){
        const count = ref(0)
        return {
            count
        }
    },
});

app.mount("#app");