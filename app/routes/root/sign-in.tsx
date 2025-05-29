import { loginWithGoogle } from "@/appwrite/auth";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import React from "react";
import { Link } from "react-router";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              <img
                src="/assets/icons/logo.svg"
                alt="logo"
                className="size-[30px]"
              />
            </Link>
            <h1 className="p-28-bold text-dark-100">TourVisto</h1>
          </header>
          <article>
            <h2 className="p-28-semibold text-dark-100 text-center">
              Start Your Travel Journey
            </h2>
            <p className="p-18-regular text-center text-gray-100 !leading-7">
              Sign in with google to manage destinations, itineraries, and user
              activity with ease
            </p>
          </article>
          <ButtonComponent
            type="button"
            className="button-class !h-11 !w-full"
            iconCss="e-search-icon"
            onClick={loginWithGoogle}
          >
            <img
              src="/assets/icons/google.svg"
              alt="google"
              className="size-5"
            />
            <span className="p-18-semibold">Sign in with Google</span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
