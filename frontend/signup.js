const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formDate = new FormData(form);
  const newpw = formDate.get("password");
  const newpw2 = formDate.get("password2");

  if (newpw === newpw2) {
    return true;
  } else {
    return false;
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);
  console.log(formData.get("password"));

  const div = document.querySelector("#info");

  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "post",
      body: formData,
    });

    const data = await res.json();
    if (data === "200") {
      div.innerText = "회원가입에 성공했습니다.";
      div.style.color = "blue";
      window.location.pathname = "/login.html";
    }
  } else {
    div.innerText = "비밀번호가 같지 않습니다.";
    div.style.color = "red";
  }
};

form.addEventListener("submit", handleSubmit);
