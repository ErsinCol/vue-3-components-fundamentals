import { createApp, ref } from 'vue'

let PlanPickerItemComponent = {
    template: "#plan-picker-item-template",
    props: {
        name: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            default: false,
        }
    },
    emits: ["select"],
    setup(props, {emit}){
        const select = () => {
            emit("select", props.name)
        }

        return {
            select,
        }
    }
}

let PlanPickerComponent = {
    components: {"plan-picker-item": PlanPickerItemComponent},
    template: "#plan-picker-template",
    setup(){
        const plans = ref(["The Single", "The Curious", "The Addict"]);
        const selectedPlan = ref(null);
        const selectPlan = (plan)=>{
            selectedPlan.value = plan;
        }

        return {
            plans,
            selectedPlan,
            selectPlan,
        }
    },
}

const app = createApp({
    components: {"plan-picker": PlanPickerComponent}
})

app.mount('#app')