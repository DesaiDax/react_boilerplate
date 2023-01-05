import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="container px-4 mx-auto flex justify-center items-center h-full">
        <div className="shadow rounded-md p-4">
          <Formik
            initialValues={{
              email: "",
              password: "",
              remember_me: false,
            }}
            validationSchema={Yup.object({
              email: Yup.string().required("Please Enter Email"),
              password: Yup.string().required("Please Enter password"),
              remember_me: Yup.boolean()
                .required("Please accept remember me.")
                .oneOf([true], "Please accept remember me."),
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
                      htmlFor="email"
                      className="block font-semibold mb-1.5"
                    >
                      Email
                    </label>
                    <div
                      className={`border rounded-md ${
                        errors.email && touched.email ? `border-red-600 ` : ""
                      }`}
                    >
                      <input
                        type="Email"
                        id="email"
                        name="email"
                        className="w-full bg-transparent rounded-md outline-none py-2.5 px-4 "
                        placeholder={"name@gmail.com"}
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
                      <label htmlFor="remember_me" className="mr-2">
                        Remember me?
                      </label>
                      <input
                        type="checkbox"
                        id="remember_me"
                        name="remember_me"
                        value={values.remember_me}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.remember_me && touched.remember_me ? (
                      <p className="text-red-600 mt-1">{errors.remember_me}</p>
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

export default Login;
