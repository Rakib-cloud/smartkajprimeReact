"use client";
import { Form, Formik } from "formik";
import { loginSchema } from "@/app/schemas/loginSchema";
import { loginData } from "@/app/utils/interfaces";
import Text from "@/app/components/Text/Text";
import { Logo } from "@/app/components/Logo/Logo";
import NextInput from "@/app/components/NextInput/NextInput";
import NextButton from "@/app/components/Button/Button";
import SmallText from "@/app/components/SmallText/SmallText";
import Link from "next/link";


export default function Login() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [userEncrypt, setUserEncrypt] = useState<null | string>(null);
  // const [tokenEncrypt, setTokenEncrypt] = useState<null | string>(null);

  const initialValues = {
    email: "",
    password: "",
  };

  // useEffect(() => {
  //   if (!userEncrypt) {
  //     return;
  //   }
  //   const logIn = async () => {
  //     const res = await fetch(`http://192.168.68.125:5000/api/v1/login`, {
  //       method: "Post",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ data: userEncrypt }),
  //     });
  //     const resData = await res.json();
  //     if (res.ok) {
  //       // toast.success(resData.message);
  //       setTokenEncrypt(resData.token);
  //           redirect("/")
  //     } else {
  //       // toast.error(resData.message);
  //     }
  //   };
  //   logIn().then();
  // }, [userEncrypt]);

  // useEffect(() => {
  //   if (!tokenEncrypt) {
  //     return;
  //   }
  //   const getSaltKey2 = async () => {
  //     const res = await fetch(`http://192.168.68.125:5000/api/v1/get_salt/2`, {
  //       method: "Get",
  //       credentials: "include",
  //     });
  //     const resData = await res.json();
  //     if (res.ok) {
  //       // const bytes = crypto.AES.decrypt(`${tokenEncrypt}`, resData.salt);
  //       // setToken(bytes.toString(crypto.enc.Utf8));
  //     }
  //   };
  //   getSaltKey2().then();
  // }, [tokenEncrypt,]);


  async function onSubmit(formData: loginData) {
    console.log("data", formData);
    // setIsLoading(true);
    // try {
    //   console.log(formData);
    //   if (formData.email === "admin@admin.com") {
    //   }
    // } catch (error) {
    // } finally {
    //   setIsLoading(false);
    // }

    // const getSaltKey = async () => {
    //   const res = await fetch(`http://192.168.68.125:5000/api/v1/get_salt/1`, {
    //     method: "Get",
    //   });
    //   const resData = await res.json();
    //   if (res.ok) {
    //     setUserEncrypt(
    //       crypto.AES.encrypt(
    //         JSON.stringify(formData),
    //         resData.salt,
    //       )?.toString(),
    //     );
    //   }
    // };

    // await getSaltKey();
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[330px] p-4">
        <Logo />

        <Text title={"Sign in"} size={"big"} classes={"mt-1"} />

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            onSubmit(values).then();
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-2">
              <div className="mb-2">
                <NextInput
                  placeholder="Type Username Or username"
                  name="email"
                />
                {touched.email && errors.email && (
                  <div className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="my-4">
                <NextInput placeholder="Password" name="password" />
                {touched.password && errors.password && (
                  <div className="text-red-400 text-xs mt-1">
                    {errors.password}
                  </div>
                )}
              </div>
              <NextButton
                radius="xl"
                classes="w-full"
                title="Sign Up"
                types={"submit"}
              >
                {" "}
                {/*{isLoading && <Spinner color="default" size="sm" />}*/}
              </NextButton>
            </Form>
          )}
        </Formik>
        <br />
        <SmallText text="This site is protected by reCAPTCHA and the Google Privacy Policy." />
        <p className="text-sm mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link className="underline" href={"/auth/sign-up"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
