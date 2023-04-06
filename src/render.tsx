import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect } from 'react';
import state from './redux/state';
import { add_post } from './redux/state';



interface IndexState{
    
        profilePage: {
            dialogsData: {
                id: number;
                name: string;
            }[];
            posts: {
                id: number;
                message: string;
                likeCount: number;
            }[];
        };
        messagePage: {
            MessageData: {
                id: number;
                message: string;
            }[];
        };
};


export let renderTree = (state:IndexState) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      );
      root.render(
        <React.StrictMode>
          
          <App  app_state={state} add_post = {add_post} />
        </React.StrictMode>
      );
}

