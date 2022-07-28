import React from 'react';
import './Footer.scss';

import { Container, Box } from '@mui/material';

export default function Footer(props: any) {
  return (
    <div>
      <footer id="footer" className="py-5">
        <div className="container py-5">
          <ul className="row  align-self-center">
            <li className="col-md-5 d-flex footer-nav  align-self-center">
              <a href="">Code Systems</a>
              <a href="">AppendSolutions Services</a>
              <a href="">About AppendSolutions</a>
            </li>
            <li className="col-md-3">
              <select className="form-select" id="country" required>
                <option value="">Placeholder</option>
                <option>United States</option>
              </select>
            </li>
            <li className="col-md-3 text-end  align-self-center">Copyright 2022 © <span>industry codes</span></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
