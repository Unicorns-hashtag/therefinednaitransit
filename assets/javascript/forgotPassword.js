// ===============================
// ELEMENTS
// ===============================

const forgotLink = document.getElementById("forgotPasswordLink");

const emailModal = document.getElementById("emailModal");
const otpModal = document.getElementById("otpModal");
const passwordModal = document.getElementById("passwordModal");

const closeEmail = document.getElementById("closeEmail");

const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const savePasswordBtn = document.getElementById("savePasswordBtn");

let generatedOTP = "";


// ===============================
// OPEN EMAIL MODAL
// ===============================

forgotLink.addEventListener("click", function(e){

    e.preventDefault();

    emailModal.style.display = "flex";

});


// ===============================
// CLOSE EMAIL MODAL
// ===============================

closeEmail.onclick = function(){

    emailModal.style.display = "none";

};


// ===============================
// SEND OTP
// ===============================

sendOtpBtn.onclick = function(){

    const email =
        document.getElementById("forgotEmail")
        .value
        .trim();

    const user =
        JSON.parse(localStorage.getItem("user"));

    if(!user){

        alert("No Admin Account Found.");

        return;

    }

    if(email !== user.email){

        alert("Email Address Not Found.");

        return;

    }

    generatedOTP =
        Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem(
        "otp",
        generatedOTP
    );

    emailModal.style.display = "none";

    otpModal.style.display = "flex";

    document.getElementById("otpMessage").innerHTML =

    `
    OTP sent successfully to
    <br><br>

    <strong>${email}</strong>

    <br><br>

    <span style="color:#16a34a">
    Demo OTP : ${generatedOTP}
    </span>
    `;

};


// ===============================
// VERIFY OTP
// ===============================

verifyOtpBtn.onclick = function(){

    const enteredOTP =
        document.getElementById("otpInput")
        .value
        .trim();

    const savedOTP =
        localStorage.getItem("otp");

    if(enteredOTP !== savedOTP){

        alert("Incorrect OTP");

        return;

    }

    otpModal.style.display = "none";

    passwordModal.style.display = "flex";

};


// ===============================
// SAVE NEW PASSWORD
// ===============================

savePasswordBtn.onclick = function(){

    const password =
        document.getElementById("newPassword").value;

    const confirm =
        document.getElementById("confirmPassword").value;

    if(password === ""){

        alert("Password cannot be empty.");

        return;

    }

    if(password !== confirm){

        alert("Passwords do not match.");

        return;

    }

    const user =
        JSON.parse(localStorage.getItem("user"));

    user.password = password;

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    localStorage.removeItem("otp");

    passwordModal.style.display = "none";

    alert("Password Changed Successfully!");

};
// ===============================
// ELEMENTS
// ===============================

const forgotLink = document.getElementById("forgotPasswordLink");

const emailModal = document.getElementById("emailModal");
const otpModal = document.getElementById("otpModal");
const passwordModal = document.getElementById("passwordModal");

const closeEmail = document.getElementById("closeEmail");

const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const savePasswordBtn = document.getElementById("savePasswordBtn");

let generatedOTP = "";


// ===============================
// OPEN EMAIL MODAL
// ===============================

forgotLink.addEventListener("click", function(e){

    e.preventDefault();

    emailModal.style.display = "flex";

});


// ===============================
// CLOSE EMAIL MODAL
// ===============================

closeEmail.onclick = function(){

    emailModal.style.display = "none";

};


// ===============================
// SEND OTP
// ===============================

sendOtpBtn.onclick = function(){

    const email =
        document.getElementById("forgotEmail")
        .value
        .trim();

    const user =
        JSON.parse(localStorage.getItem("user"));

    if(!user){

        alert("No Admin Account Found.");

        return;

    }

    if(email !== user.email){

        alert("Email Address Not Found.");

        return;

    }

    generatedOTP =
        Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem(
        "otp",
        generatedOTP
    );

    emailModal.style.display = "none";

    otpModal.style.display = "flex";

    document.getElementById("otpMessage").innerHTML =

    `
    OTP sent successfully to
    <br><br>

    <strong>${email}</strong>

    <br><br>

    <span style="color:#16a34a">
    Demo OTP : ${generatedOTP}
    </span>
    `;

};


// ===============================
// VERIFY OTP
// ===============================

verifyOtpBtn.onclick = function(){

    const enteredOTP =
        document.getElementById("otpInput")
        .value
        .trim();

    const savedOTP =
        localStorage.getItem("otp");

    if(enteredOTP !== savedOTP){

        alert("Incorrect OTP");

        return;

    }

    otpModal.style.display = "none";

    passwordModal.style.display = "flex";

};


// ===============================
// SAVE NEW PASSWORD
// ===============================

savePasswordBtn.onclick = function(){

    const password =
        document.getElementById("newPassword").value;

    const confirm =
        document.getElementById("confirmPassword").value;

    if(password === ""){

        alert("Password cannot be empty.");

        return;

    }

    if(password !== confirm){

        alert("Passwords do not match.");

        return;

    }

    const user =
        JSON.parse(localStorage.getItem("user"));

    user.password = password;

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    localStorage.removeItem("otp");

    passwordModal.style.display = "none";

    alert("Password Changed Successfully!");

};
// ===============================
// ELEMENTS
// ===============================

const forgotLink = document.getElementById("forgotPasswordLink");

const emailModal = document.getElementById("emailModal");
const otpModal = document.getElementById("otpModal");
const passwordModal = document.getElementById("passwordModal");

const closeEmail = document.getElementById("closeEmail");

const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const savePasswordBtn = document.getElementById("savePasswordBtn");

let generatedOTP = "";


// ===============================
// OPEN EMAIL MODAL
// ===============================

forgotLink.addEventListener("click", function(e){

    e.preventDefault();

    emailModal.style.display = "flex";

});


// ===============================
// CLOSE EMAIL MODAL
// ===============================

closeEmail.onclick = function(){

    emailModal.style.display = "none";

};


// ===============================
// SEND OTP
// ===============================

sendOtpBtn.onclick = function(){

    const email =
        document.getElementById("forgotEmail")
        .value
        .trim();

    const user =
        JSON.parse(localStorage.getItem("user"));

    if(!user){

        alert("No Admin Account Found.");

        return;

    }

    if(email !== user.email){

        alert("Email Address Not Found.");

        return;

    }

    generatedOTP =
        Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem(
        "otp",
        generatedOTP
    );

    emailModal.style.display = "none";

    otpModal.style.display = "flex";

    document.getElementById("otpMessage").innerHTML =

    `
    OTP sent successfully to
    <br><br>

    <strong>${email}</strong>

    <br><br>

    <span style="color:#16a34a">
    Demo OTP : ${generatedOTP}
    </span>
    `;

};


// ===============================
// VERIFY OTP
// ===============================

verifyOtpBtn.onclick = function(){

    const enteredOTP =
        document.getElementById("otpInput")
        .value
        .trim();

    const savedOTP =
        localStorage.getItem("otp");

    if(enteredOTP !== savedOTP){

        alert("Incorrect OTP");

        return;

    }

    otpModal.style.display = "none";

    passwordModal.style.display = "flex";

};


// ===============================
// SAVE NEW PASSWORD
// ===============================

savePasswordBtn.onclick = function(){

    const password =
        document.getElementById("newPassword").value;

    const confirm =
        document.getElementById("confirmPassword").value;

    if(password === ""){

        alert("Password cannot be empty.");

        return;

    }

    if(password !== confirm){

        alert("Passwords do not match.");

        return;

    }

    const user =
        JSON.parse(localStorage.getItem("user"));

    user.password = password;

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    localStorage.removeItem("otp");

    passwordModal.style.display = "none";

    alert("Password Changed Successfully!");

};