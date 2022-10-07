//validation schema

export const validation = {
  validateFullName(fullName) {
    let message = "";
    if (fullName.length === 0) {
      message = "FullName is required";
    }
    return message;
  },

  validateEmail(email) {
    let message = "";
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length === 0) {
      message = "Email Address is required";
    } else if (!email.toLowerCase().match(emailRegex)) {
      message = "Invalid Email Address";
    }
    return message;
  },

  validatePhoneNumber(phoneNumber) {
    let message = "";
    let phoneRegex = /^(\+91)[0-9]{10}$/;
    if (phoneNumber.length === 0) {
      message = "Phone Number is required";
    } else if (!phoneNumber.match(phoneRegex)) {
      message = "Please enter a Valid phone number with country code";
    }
    return message;
  },

  validateLink(link) {
    let message = "";
    let urlRegex =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if (link.length > 0 && !link.match(urlRegex)) {
      message = "Invalid Website/App Link";
    }
    return message;
  },

  validateRevenue(revenue) {
    let message = "";
    console.log(parseInt(revenue.slice(1)));
    if (revenue.length <= 1) {
      message = "Revenue is Required";
    } else if (parseInt(revenue.slice(1)) <= 0) {
      message = "Revenue must be greater than 0";
    }
    return message;
  },
};
