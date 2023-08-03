import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  //next auth
  const { data: session } = useSession()

  //firebase
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      {/* <h2 style={{ textAlign: "center" }}>user: {session?.user?.name}</h2> */}
      <h2 style={{ textAlign: "center" }}>user: {user?.email}</h2>
    </div>
  );
};

export default HomePage;
