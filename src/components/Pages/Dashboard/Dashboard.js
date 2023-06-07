import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material'
import styles from './Dashboard.module.css'
import { OverviewBudget } from './overview/overview-budget'
import { OverviewSales } from './overview/overview-sales'
import { OverviewTasksProgress } from './overview/overview-tasks-progress'
import { OverviewTotalCustomers } from './overview/overview-total-customers'
import { OverviewTraffic } from './overview/overview-traffic'
import { useContext, useEffect, useState } from 'react'

const now = new Date()

const Dashboard = () => { 
    const [ total_entradas, setTotalEntradas ] = useState('')
    const [ total_saidas, setTotalSaidas ] = useState('')
    const [ total_saidas_mp, setTotalSaidasMP ] = useState('')
    var [ total_meses ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    var [ total_meses_ap ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const fetchMovimentacoesByYear = year => {
        fetch(`http://35.198.52.93/movimentacoes/dashboard/${year}`)
        .then(res => res.json())
        .then(json => {
            var i = 0

            setTotalEntradas(json.filter(function(value) { return (new Date (value.data_entrada).getMonth() === now.getMonth() ) }).length)
            setTotalSaidas(json.filter(function(value) { return ((value.data_saida !== null || value.status.toString().toUpperCase() === 'FINALIZADO') && 
                            new Date (value.data_entrada).getMonth() === now.getMonth() ) }).length)
            setTotalSaidasMP(json.filter(function(value) { return ((value.data_saida !== null || value.status.toString().toUpperCase() === 'FINALIZADO') && 
                                new Date (value.data_entrada).getMonth() === (now.getMonth() - 1)) }).length)
            for (i = 0; i < 12; i++){
                total_meses[i] = json.filter(function(value) {return (new Date(value.data_entrada).getMonth() === i)}).length
            }
        })
    }

    const fetchMovimentacoesByLastYear = year => {
        fetch(`http://35.198.52.93/movimentacoes/dashboard/${year}`)
        .then(res => res.json())
        .then(json => {
            var i = 0
            for (i = 0; i < 12; i++){
                total_meses_ap[i] = json.filter(function(value) {return (new Date(value.data_entrada).getMonth() === i)}).length
            }
        })
    }

    useEffect(() => fetchMovimentacoesByYear(now.getFullYear()), [now.getFullYear()])
    useEffect(() => fetchMovimentacoesByLastYear(now.getFullYear() - 1), [now.getFullYear() - 1])

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
                        difference={((100 * total_entradas) / total_meses[now.getMonth() - 1])}
                        positive={((100 * total_entradas) / total_meses[now.getMonth() - 1]) > 100}
                        sx={{ height: '100%' }}
                        value={total_entradas.toString()}
                    />
                    </Grid>
                    <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                    >
                    <OverviewTotalCustomers
                        difference={((100 * total_saidas) / total_saidas_mp)}
                        positive={((100 * total_saidas) / total_saidas_mp) > 100}
                        sx={{ height: '100%' }}
                        value={total_saidas.toString()}
                    />
                    </Grid>
                    <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                    >
                    <OverviewTasksProgress
                        sx={{ height: '100%' }}
                        value={(((total_entradas - total_saidas) * 100) / total_entradas).toFixed(2)}
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
                            data: [total_meses[0], total_meses[1], total_meses[2], total_meses[3], total_meses[4], total_meses[5], total_meses[6], total_meses[7], total_meses[8], total_meses[9], total_meses[10], total_meses[11]]
                        },
                        {
                            name: 'Ano passado',
                            data: [total_meses_ap[0], total_meses_ap[1], total_meses_ap[2], total_meses_ap[3], total_meses_ap[4], total_meses_ap[5], total_meses_ap[6], total_meses_ap[7], total_meses_ap[8], total_meses_ap[9], total_meses_ap[10], total_meses_ap[11]]
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
                        chartSeries={[(total_entradas - total_saidas) * 100 / total_entradas, 
                        (total_saidas * 100) / total_entradas]}
                        labels={['Entradas', 'Saidas']}
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
