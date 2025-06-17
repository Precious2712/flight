export const signupFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    validation: {
      required: "Name is required",
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    validation: {
      required: "Email is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Please enter a valid email",
      },
    },
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    placeholder: "Enter your country",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
  },
];

export const loginFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    validation: {
      required: "Password is required",
    },
  },
];
