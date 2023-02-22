import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import Auth from '../components/Auth';
import Intro from './../components/Intro';
export default function Home() {
  const [user] = useAuthState(auth);

  return !user ? <Auth/> : <Intro/>;
}
