/** @jsx jsx */
import { jsx } from '@emotion/core';
import './logo.css';

interface IProps {
  product?: string;
  size?: string;
}

export const sizes = {
  accounts: {
    small: {
      width: '150px',
      height: '20px'
    },
    default: {
      width: '239px',
      height: '32px'
    }
  },
  livechat: {
    default: {
      width: '70px',
      height: '16px'
    },
    medium: {
      width: '140px',
      height: '32px'
    }
  },
  helpdesk: {
    default: {
      backgroundSize: '75px 14px',
      width: '75px',
      height: '16px'
    },
    medium: {
      backgroundSize: '150px 28px',
      width: '150px',
      height: '32px'
    }
  },
  chatbot: {
    default: {
      width: '67px',
      height: '16px'
    },
    medium: {
      width: '134px',
      height: '32px'
    }
  },
  knowledgebase: {
    default: {
      backgroundSize: '111px 14px',
      width: '111px',
      height: '16px'
    },
    medium: {
      backgroundSize: '222px 28px',
      width: '222px',
      height: '32px'
    }
  }
};

export const Logo: React.FC<IProps> = ({ size = 'default', product = 'livechat' }) => {
  const appliedSize = sizes[product][size];
  if (!appliedSize.backgroundSize) {
    appliedSize.backgroundSize = `${appliedSize.width} ${appliedSize.height}`;
  }

  return <div className={`logo-${product}`} style={appliedSize} />;
};
