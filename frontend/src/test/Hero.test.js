import React from 'react';
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Hero from "../Landing_Page/home/Hero";

describe("Hero component",()=>{
    test("render hero image",()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("heroPageImg");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src",'media/images/homeHero.png');
    });
    test("render Signup button",()=>{
        render(<Hero />);
        const Signupbtn = screen.getByRole("button")
        expect(Signupbtn).toBeInTheDocument();
        expect(Signupbtn).toHaveClass("btn-primary");
    });
})