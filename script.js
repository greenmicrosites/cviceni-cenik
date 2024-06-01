

const selectPlan = (planNumber) => {
    const plan = document.querySelector("#plan" + planNumber)
    document.querySelector(".plan").classList.remove("plan--selected")
    plan.classList.add("plan--selected")
}

selectPlan(1)