import React from 'react';
import './Footer.scss';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';

export default function Footer(props: any) {
  return (
    <div>
      <footer id="footer" className="py-5">
        <div className="container">
          <ul className="row  align-self-center">
            <li className="col-md-5 d-flex footer-nav  align-self-center">
              <a href="">Code Systems</a>
              <a href="">Power by AppendSolutions (Link to appendsolutions.com)</a>
              <a href="">Contact Us (link to contact us form)</a>
            </li>
            <li className="col-md-3">
              <SelectDropDown />
            </li>
            <li className="col-md-3 text-end  align-self-center">
              Copyright 2022 © <span>industry codes</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
