import React, {useEffect} from 'react';
import { AppShell, Burger, Center, Group,} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {useDispatch, useSelector} from "react-redux";
import s from './assets/styles/app.module.scss'
import {auth} from "./actions/user";
// import { MantineLogo } from '@mantinex/mantine-logo';
import AuthPage from "./pages/AuthPage/AuthPage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import FilesPage from './pages/FilesPage/FilesPage'
import BinPage from './pages/BinPage/BinPage'
import Navigation from './components/Navigation/Navigation'
import logoImg from './assets/img/logo.svg'
import Header from './components/Header/Header'
import FavoreiteFilesPage from './pages/FavoriteFilesPage/FavoreiteFilesPage'
import RecentFilesPage from './pages/RecentFilesPage/RecentFilesPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const [opened, { toggle }] = useDisclosure();
  // const isAuth = false

  useEffect(() => {
    dispatch(auth())
}, [])

  return (
    <BrowserRouter>
      <div className="App">
    {
      !isAuth?
          <Routes>
            <Route path="/auth" element={<AuthPage/> } />
          </Routes>
      :
      <AppShell
       layout="alt"
      header={{ height: { base: 80, md: 90, lg: 100 } }}
      navbar={{
        width: { base: 170,  md: 200, lg: 300},
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={s.header}>    
          <Header opened={opened} toggle={toggle}/>
      </AppShell.Header>
      <AppShell.Navbar p="md" className={s.navbar}>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        <img src={logoImg} alt="logo image" className={s.logo} />
        <Navigation toggle={toggle}/>
      </AppShell.Navbar>
      <AppShell.Main className={s.main}>
      <Routes>
            <Route path="/bin" element={<BinPage/> } />
            <Route path="/" element={<FilesPage/> } />
            <Route path="/settings" element={<SettingsPage/> } />
            <Route path="/favorite" element={<FavoreiteFilesPage/> } />
            <Route path="/recent" element={<RecentFilesPage/> } />
          </Routes>
      </AppShell.Main>
    </AppShell>
    }

      </div>
    </BrowserRouter>
  );
}

export default App;
