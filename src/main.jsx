import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Component/Layout/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
   
   
   <RouterProvider router={router} />
   </QueryClientProvider>
  </React.StrictMode>,
)
