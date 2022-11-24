import { Fragment, ReactElement, SetStateAction, useEffect, useState } from "react";
import {StartupHttpService} from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";
import StartupCard from "./StartupCard";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function StartupList(): ReactElement {  

  const [startups, setStartups] = useState<Startup[]>([]);
  const [page, setPage] = useState<number>(1);
  const handleChange = (event: any, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    const getStartups = async () => {
      const startups = await StartupHttpService.getStartups();
      setStartups(startups)
    }
    getStartups()
  },[])

  return <Fragment>
    {startups.slice((page - 1)*20, page*20).map((startup) => <StartupCard name={startup.name} dateFounded={String(startup.dateFounded)} employees={String(startup.employees)} totalFunding={String(startup.totalFunding)} currentInvestmentStage={String(startup.currentInvestmentStage)}/>)}
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  </Fragment>;
}


