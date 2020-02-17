// example theme.js
import {themes} from 'mdx-deck';
import Provider from './provider';

const theme = themes.dark;
export default {
  // extends the default theme
  ...theme,
  Provider,
  // add a custom font
  font: 'OpenSans, sans-serif',
  colors: {
    text: 'white',
    background: '#0a0b0f',
    link: 'white',
    primary: '#ffafa2',
    secondary: '#0d2481',

  },
  a: {color: 'white', textDecoration: 'none'},
  h1: {
    textTransform: 'uppercase',
  },
  p: {},
  weights: 400,
  img: {
    maxHeight: '80vh',
    maxWidth: '100%',
  },
  codeSurfer: {
    plain: {
      color: '#d6deeb',
      backgroundColor: '#0a0b0f',
    },
    styles: [
      {
        types: ['comment'],
        style: {
          color: 'rgb(99, 119, 119)',
          fontStyle: 'italic',
        },
      },
      {
        types: ['string', 'url'],
        style: {
          color: 'rgb(173, 219, 103)',
        },
      },
      {
        types: ['variable'],
        style: {
          color: 'rgb(214, 222, 235)',
        },
      },
      {
        types: ['number'],
        style: {
          color: 'rgb(247, 140, 108)',
        },
      },
      {
        types: ['builtin', 'char', 'constant', 'function'],
        style: {
          color: 'rgb(130, 170, 255)',
        },
      },
      {
        // This was manually added after the auto-generation
        // so that punctuations are not italicised
        types: ['punctuation'],
        style: {
          color: 'rgb(199, 146, 234)',
        },
      },
      {
        types: ['selector', 'doctype'],
        style: {
          color: 'rgb(199, 146, 234)',
          fontStyle: 'italic',
        },
      },
      {
        types: ['class-name'],
        style: {
          color: 'rgb(255, 203, 139)',
        },
      },
      {
        types: ['tag', 'operator', 'keyword'],
        style: {
          color: 'rgb(127, 219, 202)',
        },
      },
      {
        types: ['boolean'],
        style: {
          color: 'rgb(255, 88, 116)',
        },
      },
      {
        types: ['property'],
        style: {
          color: 'rgb(128, 203, 196)',
        },
      },
      {
        types: ['namespace'],
        style: {
          color: 'rgb(178, 204, 214)',
        },
      },

      {
        types: ['changed'],
        style: {
          color: 'rgb(162, 191, 252)',
          fontStyle: 'italic',
        },
      },
      {
        types: ['deleted'],
        style: {
          color: 'rgba(239, 83, 80, 0.56)',
          fontStyle: 'italic',
        },
      },
      {
        types: ['inserted', 'attr-name'],
        style: {
          color: 'rgb(173, 219, 103)',
          fontStyle: 'italic',
        },
      },
    ],
  },
};
