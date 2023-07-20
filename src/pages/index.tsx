// import Head from "next/head";
// import Link from "next/link";
import { useState,useEffect } from 'react';
import { api,setToken } from "~/utils/api";
import Sidebar from './components/SideNavBar';
import HeaderBar from './components/HeaderBar';



export default function Home() {
  const [, setAccessToken] = useState('');

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      setToken(storedAccessToken);
    } else {
      // Realiza la redirección a la página de inicio de sesión
      window.location.href = '/login';
    }
  }, []);




  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const {mutate} = api.example.save.useMutation({
    onError: (error) => {
      console.log('tengo error :( ',error);
    },
    onSuccess: () => {
      console.log('Mutacion confirmada loko')
    }
  })


  // TODO: ESTE BOTON SACARLO
  const submit =  () => {
    console.log('Estoy mandando data')
    // const rta = mutate({name:'Frank Hard Link'})
    // console.log('esta es la rta >>> ',rta )
  };

  return (
    <div>
      <HeaderBar />
      <Sidebar />

    </div>
  );
}
