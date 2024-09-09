// model and service
import { GetAllMajorServcies } from "@/service/service"

// components
import Grid from "@/components/grid"
import Card from "@/components/card"
import Jumbotron from "@/components/jumbotron"

// utils
import { NewID } from "@/utils/id"

const Home = async () => {
    const services = await GetAllMajorServcies()

    return (
        <main>
            <Jumbotron>
                <h1 className="typo1">Kod1ngclub</h1>
                <p className="text mb-2">코딩 동아리를 위한 코딩 동아리</p>
            </Jumbotron>

            
            <div className="resbody pt-3">
                <Grid>
                    { services.map(item => ( <Card key={NewID()} title={item.name} description={item.description} link={item.link} /> ))}
                </Grid>
            </div>
        </main>
    )
}

export default Home

export const revalidate = 60
