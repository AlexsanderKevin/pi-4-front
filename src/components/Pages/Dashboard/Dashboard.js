import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material'
import styles from './Dashboard.module.css'
import { OverviewBudget } from './overview/overview-budget'
import { OverviewSales } from './overview/overview-sales'
import { OverviewTasksProgress } from './overview/overview-tasks-progress'
import { OverviewTotalCustomers } from './overview/overview-total-customers'
import { OverviewTraffic } from './overview/overview-traffic'
import { DashboardContext } from './DashboardContext'
import { useContext, useEffect } from 'react'

const now = new Date()

const Dashboard = () => {
    /* Solucionar importação de contexto
    
    const { fetchMovimentacoesByYear } = useContext(DashboardContext)

    useEffect(() => fetchMovimentacoesByYear(), [])*/

    return(
        <>
            <Box
                className={styles.Box}
                component="main"
                sx={{
                flexGrow: 1,
                py: 0
                }}
            >
                <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                    >
                    <OverviewBudget
                        difference={12}
                        positive
                        sx={{ height: '100%' }}
                        value="15"
                    />
                    </Grid>
                    <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                    >
                    <OverviewTotalCustomers
                        difference={16}
                        positive={false}
                        sx={{ height: '100%' }}
                        value="10"
                    />
                    </Grid>
                    <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                    >
                    <OverviewTasksProgress
                        sx={{ height: '100%' }}
                        value={33}
                    />
                    </Grid>
                    <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                    >
                    </Grid>
                    <Grid
                    xs={12}
                    lg={8}
                    >
                    <OverviewSales
                        chartSeries={[
                        {
                            name: 'Este ano',
                            data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                        },
                        {
                            name: 'Ano passado',
                            data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                        }
                        ]}
                        sx={{ height: '100%' }}
                    />
                    </Grid>
                    <Grid
                    xs={12}
                    md={6}
                    lg={4}
                    >
                    <OverviewTraffic
                        chartSeries={[1, 66, 33]}
                        labels={['Entradas', 'Saidas', 'Em reparo']}
                        sx={{ height: '100%' }}
                    />
                    </Grid>
                    <Grid
                    xs={12}
                    md={6}
                    lg={4}
                    >
                    
                    </Grid>
                    <Grid
                    xs={12}
                    md={12}
                    lg={8}
                    >
                    
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Dashboard
