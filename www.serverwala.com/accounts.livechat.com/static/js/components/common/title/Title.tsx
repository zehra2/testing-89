/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import './title.css';
import { detectProduct, Product } from '../../../modules/Product';
import { Logo } from '../logo/Logo';

interface IProps {
  caption: string;
}

export const Title: React.FC<IProps> = ({ caption, children }) => {
  return (
    <React.Fragment>
      <div className="title">
        {detectProduct() === Product.HelpDesk && <Logo product="helpdesk" size="medium" />}

        <div className="font24">{caption}</div>
        {children != null && <p className="font15">{children}</p>}
      </div>
    </React.Fragment>
  );
};
