import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value) =>
    value ? value : <Skeleton variant="text" width={182} />;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(todayDeaths)}
          label="Óbitos hoje"
          color="#f7b829"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(deaths)}
          label="Total de Mortos"
          color="#E95078"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(todayCases)}
          label="Total de Recuperados"
          color="#67C887"
        />
      </Grid>
    </Grid>
  );
}

export default memo(Board);
