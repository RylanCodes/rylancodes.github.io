console.log(
  "%c👋 Hello there, thanks for checking out my website. Feel free to reach out to me!",
  "font-size: 16px; color: #eee;"
);

function copyEmailAddress() {
  const emailSpan = document.querySelector(".email");
  const emailAddress = emailSpan.textContent;
  const tooltipMessage = document.querySelector(".tooltipMessage");

  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      tooltipMessage.textContent = "Email Copied!";
      setTimeout(() => {
        tooltipMessage.textContent = "";
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy email address: ", err);
    });
}