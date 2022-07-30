import * as React from 'react';
import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import './PaginationLink.scss';

export default function PaginationLink() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack>
  );
}
