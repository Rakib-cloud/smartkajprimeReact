"use client";
import { Form, Formik } from "formik";
import { contactFormSchema } from "@/app/schemas/loginSchema";
import NextInput from "@/app/components/NextInput/NextInput";
import NextTextArea from "@/app/components/NextTextArea/NextTextArea";
import NextButton from "@/app/components/Button/Button";
import { contactUsData } from "@/app/utils/interfaces";
import {baseUrl} from "@/app/utils/webInfo";

export default function ContactForm() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const onSubmit = async (formData: contactUsData) => {
    // setIsLoading(true);
    try {
      console.log(formData);
    } catch (error) {
    } finally {
      // setIsLoading(false);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={async (values,  { resetForm }) => {
            const res = await fetch(
                `${baseUrl.url}/contact_us/createNew`,
                {
                  method: "POST",
                  headers: {
                    "content-type":"application/json",
                      Authorization: `Bearer ${baseUrl.token}`,
                  },
                  body: JSON.stringify(values),
                }
            );
            const resData = await res.json();
            if (res.ok) {
              resetForm()
              // setSubCategory(null);
              // form.reset();

            } else {
              console.error(resData.message);
            }


          onSubmit(values).then();
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-8">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">


              <div className="mb-2 w-full">
                <NextInput
                  name="name"
                  label="Name"
                  placeholder="Type your Full Name"
                />
                {touched.name && errors.name && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </div>
                )}
              </div>
            </div>

            <div className="">
              <NextInput
                name="email"
                label="Email"
                placeholder="Type your email"
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-xs mt-1">{errors.email}</div>
              )}
            </div>

            <div className="">
              <NextInput
                name="phone"
                label="Phone"
                placeholder="Type your phone(+880)"
              />
              {touched.phone && errors.phone && (
                <div className="text-red-500 text-xs mt-1">{errors.phone}</div>
              )}
            </div>

            <div className="">
              <NextTextArea
                name={"message"}
                label="Message"
                placeholder={"Enter your message"}
              />
              {touched.message && errors.message && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.message}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <NextButton
                title={"Submit"}
                sizes={"lg"}
                classes={"w-full"}
                types={"submit"}
              ></NextButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
