import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './PaginationLink.scss';

export default function PaginationLink(props: any) {
  return (
    <Stack spacing={2}>
      <Pagination count={props.totalPages} shape="rounded" />
    </Stack>
  );
}
