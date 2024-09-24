const donationBtn = document.getElementById("donationBtn");
const historyBn = document.getElementById("historyBn");
const donateSection = document.getElementById("donateSection");
const historySection = document.getElementById("historySection");
const balance = document.getElementById("balance");
const noakhaniDonatedAmmount = document.getElementById("noakhaniDonatedAmmount");
const noakhaliDonateBtn = document.getElementById("noakhaliDonateBtn");
const feniDonatedAmmount = document.getElementById("feniDonatedAmmount");
const feniDonateBtn = document.getElementById("feniDonateBtn");
const quotaDonatedAmmount = document.getElementById("quotaDonatedAmmount");
const quotaDonateBtn = document.getElementById("quotaDonateBtn");
const noakhaliInput = document.getElementById("noakhaliInput");
const feniInput = document.getElementById("feniInput");
const quotaInput = document.getElementById("quotaInput");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const historyLogs = document.getElementById("historyLogs");





donationBtn.addEventListener("click", () => {
    donateSection.classList.remove("hidden");
    donateSection.classList.add("block");
    historySection.classList.remove("block");
    historySection.classList.add("hidden");
    historyBn.classList.remove("btn-active");
    donationBtn.classList.add("btn-active");

});

historyBn.addEventListener("click", () => {
    historySection.classList.remove("hidden");
    historySection.classList.add("block");
    donateSection.classList.remove("block");
    donateSection.classList.add("hidden")
    donationBtn.classList.remove("btn-active");
    historyBn.classList.add("btn-active");
});


noakhaliDonateBtn.addEventListener("click", () => {
    let noakhaniDonatedAmmountNum = parseFloat(noakhaniDonatedAmmount.innerText);
    let noakhaliInputNum = parseFloat(noakhaliInput.value);

    if (noakhaliInputNum > parseFloat(balance.innerText)) {
        let failmsg = "Low Balance";
        let cancelImgSrc = "./assets/cancel.png";
        let failPMsg = "Please add more fund to donate";
        let failSpanMsg = "Try again"
        showModal(failmsg, cancelImgSrc, failPMsg, failSpanMsg);
        return;
    } else if (noakhaliInput.value == "" || noakhaliInputNum <= 0) {
        let noInputMsg = "Invalid Iput";
        let noInputImgSrc = "./assets/cancel.png";
        let noInputPMsg = "Please enter a valid input to donate";
        let noInputSpanMsg = "Try Again";
        showModal(noInputMsg, noInputImgSrc, noInputPMsg, noInputSpanMsg);
        return;
    }



    noakhaniDonatedAmmountNum += noakhaliInputNum;
    noakhaniDonatedAmmount.innerText = noakhaniDonatedAmmountNum;
    updateBalance(noakhaliInputNum);
    let successMsg = "Congrates";
    let successImgSrc = "./assets/coin.png";
    let successPMsg = "You have donated for HumanKind"
    let successSpanMsg = "Successfully"
    showModal(successMsg, successImgSrc, successPMsg, successSpanMsg);
    addLogToHistory(noakhaliInputNum, "Flood", "Noakhali")

})


feniDonateBtn.addEventListener("click", () => {
    let feniDonatedAmmountNum = parseFloat(feniDonatedAmmount.innerText);
    let feniInputNum = parseFloat(feniInput.value);

    if (feniInputNum > parseFloat(balance.innerText)) {
        let failmsg = "Low Balance";
        let cancelImgSrc = "./assets/cancel.png";
        let failPMsg = "Please add more fund to donate";
        let failSpanMsg = "Try again"
        showModal(failmsg, cancelImgSrc, failPMsg, failSpanMsg);
        return;
    } else if (feniInput.value == "" || feniInputNum <= 0) {
        let noInputMsg = "Invalid Iput";
        let noInputImgSrc = "./assets/cancel.png";
        let noInputPMsg = "Please enter a valid input to donate";
        let noInputSpanMsg = "Try Again";
        showModal(noInputMsg, noInputImgSrc, noInputPMsg, noInputSpanMsg);
        return;
    }



    feniDonatedAmmountNum += feniInputNum;
    feniDonatedAmmount.innerText = feniDonatedAmmountNum;
    updateBalance(feniInputNum);
    let successMsg = "Congrates";
    let successImgSrc = "./assets/coin.png";
    let successPMsg = "You have donated for HumanKind"
    let successSpanMsg = "Successfully"
    showModal(successMsg, successImgSrc, successPMsg, successSpanMsg);
    addLogToHistory(feniInputNum, "Flood", "Feni")

})


quotaDonateBtn.addEventListener("click", () => {
    let quotaDonatedAmmountNum = parseFloat(quotaDonatedAmmount.innerText);
    let quotaInputNum = parseFloat(quotaInput.value);

    if (quotaInputNum > parseFloat(balance.innerText)) {
        let failmsg = "Low Balance";
        let cancelImgSrc = "./assets/cancel.png";
        let failPMsg = "Please add more fund to donate";
        let failSpanMsg = "Try again"
        showModal(failmsg, cancelImgSrc, failPMsg, failSpanMsg);
        return;
    } else if (quotaInput.value == "" || quotaInputNum <= 0) {
        let noInputMsg = "Invalid Iput";
        let noInputImgSrc = "./assets/cancel.png";
        let noInputPMsg = "Please enter a valid input to donate";
        let noInputSpanMsg = "Try Again";
        showModal(noInputMsg, noInputImgSrc, noInputPMsg, noInputSpanMsg);
        return;
    }



    quotaDonatedAmmountNum += quotaInputNum;
    noakhaniDonatedAmmount.innerText = quotaDonatedAmmountNum;
    updateBalance(quotaInputNum);
    let successMsg = "Congrates";
    let successImgSrc = "./assets/coin.png";
    let successPMsg = "You have donated for HumanKind"
    let successSpanMsg = "Successfully"
    showModal(successMsg, successImgSrc, successPMsg, successSpanMsg);
    addLogToHistory(quotaInputNum, "Injured", "Quota Movement")

})






function updateBalance(val) {
    let balanceNum = parseFloat(balance.innerText);
    balanceNum = balanceNum - val
    balance.innerText = balanceNum;
}



modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
})


function showModal(h1Msg, imgSrc, pMsg, spanMsg) {
    document.querySelector("#modal div h1").innerText = h1Msg;
    document.querySelector("#modal div img").src = imgSrc;
    document.querySelector("#modal div p").innerText = pMsg;
    document.querySelector("#modal div span").innerText = spanMsg;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function addLogToHistory(amount, purpose, place) {
    let historyItem = document.createElement("div");
    historyItem.className = `flex flex-col border-2 p-5 rounded-xl w-full gap-5`;
    historyItem.innerHTML = `<h1 class="text-xl font-bold">${amount} Taka is Donated for ${purpose} at ${place}, Bangladesh</h1> <p class="text-secondaryTextColor">Date : ${new Date()}</p>`;

    document.getElementById("noHistory").classList.remove("flex");
    document.getElementById("noHistory").classList.add("hidden");
    historyLogs.prepend(historyItem);

}


