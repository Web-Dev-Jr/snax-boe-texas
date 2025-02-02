import React, { useState } from "react";

import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Contact,
  LoanProducts,
  Resources,
  Team,
  Media,
  TeamBio,
  Policies,
  AbigailD,
  ArielC,
  AshleyC,
  DavidR,
  DebB,
  ChrisH,
  ErinW,
  FrankR,
  JeffM,
  JeRonA,
  KeriG,
  MarcusL,
  MeghanS,
  RossR,
  RyanC,
  ShawnF,
  PrivacyPolicy,
  Ccpa,
  Careers,
  BookVan,
} from "./pages";

export default function App() {
  return (
    <>
      <Router>
        <Route path="/TeamBio" exact component={() => <TeamBio />}></Route>
        <NavHeader />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Contact" exact component={() => <Contact />} />
          <Route
            path="/LoanProducts"
            exact
            component={() => <LoanProducts />}
          />
          <Route path="/Resources" exact component={() => <Resources />} />
          <Route path="/BookVan" exact component={() => <BookVan />} />
          <Route
            path="/PrivacyPolicy"
            exact
            component={() => <PrivacyPolicy />}
          />
          <Route path="/Ccpa" exact component={() => <Ccpa />} />
          <Route path="/Policies" exact component={() => <Policies />} />
          <Route path="/AbigailD" exact component={() => <AbigailD />} />
          <Route path="/ArielC" exact component={() => <ArielC />} />
          <Route path="/AshleyC" exact component={() => <AshleyC />} />
          <Route path="/DavidR" exact component={() => <DavidR />} />
          <Route path="/DebB" exact component={() => <DebB />} />
          <Route path="/ChrisH" exact component={() => <ChrisH />} />
          <Route path="/ErinW" exact component={() => <ErinW />} />
          <Route path="/FrankR" exact component={() => <FrankR />} />
          <Route path="/JeffM" exact component={() => <JeffM />} />
          <Route path="/JeRonA" exact component={() => <JeRonA />} />
          <Route path="/KeriG" exact component={() => <KeriG />} />
          <Route path="/MarcusL" exact component={() => <MarcusL />} />
          <Route path="/MeghanS" exact component={() => <MeghanS />} />
          <Route path="/RossR" exact component={() => <RossR />} />
          <Route path="/RyanC" exact component={() => <RyanC />} />
          <Route path="/ShawnF" exact component={() => <ShawnF />} />
          <Route path="/Team" exact component={() => <Team />} />
          <Route path="/media" exact component={() => <Media />} />
          <Route path="/Careers" exact component={() => <Careers />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
