import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="container px-4 mx-auto flex justify-center items-center h-full">
        <div className="shadow rounded-md p-4">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone_number: "",
              password: "",
              private_policy: false,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Please Enter name"),
              email: Yup.string().required("Please Enter email"),
              phone_number: Yup.string()
                .matches(
                  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                  "Phone number is not valid"
                )
                .min(10, "to short")
                .max(10, "to long")
                .required("Please Enter Mobile Number"),
              password: Yup.string().required("Please Enter password"),
              private_policy: Yup.boolean()
                .required("Please accept private policy.")
                .oneOf([true], "Please accept private policy."),
            })}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <div className="mb-2">
                    <label
                      htmlFor="name"
                      className="block font-semibold mb-1.5"
                    >
                      Name
                    </label>
                    <div
                      className={`border rounded-md ${
                        errors.name && touched.name ? `border-red-600 ` : ""
                      }`}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-transparent rounded-md outline-none py-2.5 px-4 "
                        placeholder={"Enter name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>
                    {errors.name && touched.name ? (
                      <p className="text-red-600 mt-1">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block font-semibold mb-1.5"
                    >
                      email
                    </label>
                    <div
                      className={`border rounded-md ${
                        errors.email && touched.email ? `border-red-600 ` : ""
                      }`}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-transparent rounded-md outline-none py-2.5 px-4 "
                        placeholder={"Enter email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    {errors.email && touched.email ? (
                      <p className="text-red-600 mt-1">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="phone_number"
                      className="block font-semibold mb-1.5"
                    >
                      phone number
                    </label>
                    <div
                      className={`border rounded-md ${
                        errors.phone_number && touched.phone_number
                          ? `border-red-600 `
                          : ""
                      }`}
                    >
                      <input
                        type="number"
                        id="phone_number"
                        name="phone_number"
                        className="w-full bg-transparent rounded-md outline-none py-2.5 px-4 "
                        placeholder={"Enter phone number"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone_number}
                      />
                    </div>
                    {errors.phone_number && touched.phone_number ? (
                      <p className="text-red-600 mt-1">{errors.phone_number}</p>
                    ) : null}
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="password"
                      className="block font-semibold mb-1.5"
                    >
                      password
                    </label>
                    <div
                      className={`border rounded-md ${
                        errors.password && touched.password
                          ? `border-red-600 `
                          : ""
                      }`}
                    >
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full bg-transparent rounded-md outline-none py-2.5 px-4 "
                        placeholder={"Enter password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>
                    {errors.password && touched.password ? (
                      <p className="text-red-600 mt-1">{errors.password}</p>
                    ) : null}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <label htmlFor="private_policy" className="mr-2">
                        private policy?
                      </label>
                      <input
                        type="checkbox"
                        id="private_policy"
                        name="private_policy"
                        value={values.private_policy}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.private_policy && touched.private_policy ? (
                      <p className="text-red-600 mt-1">
                        {errors.private_policy}
                      </p>
                    ) : null}
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-gray-600 text-white hover:text-gray-600 border border-gray-600 hover:bg-white transition duration-300 rounded-md py-2 px-4"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
