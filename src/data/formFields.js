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
    name: "contact",
    label: "Contact Number",
    type: "tel",
    placeholder: "+1234567890",
    validation: {
      required: "Contact number is required",
      pattern: {
        value: /^[+]?[\d\s-]+$/,
        message: "Please enter a valid contact number",
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
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: `Password must be at least 8 characters
        - 1 uppercase letter
        - 1 lowercase letter
        - 1 number
        - 1 special character (@$!%*?&)
        `,
      },
    },
  },
  // {
  //   name: "confirmPassword",
  //   label: "Confirm Password",
  //   type: "password",
  //   placeholder: "••••••••",
  //   validation: {
  //     required: "Please confirm your password",
  //     validate: (value, formValues) => 
  //       value === formValues.password || "Passwords don't match",
  //   },
  // },
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
