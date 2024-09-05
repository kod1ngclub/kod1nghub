import { ContactName } from "@/model/contact"

import { GetAllMajorServcies } from "@/service/service"
import { GetContactByName  } from "@/service/contact"

import Link from "next/link"

import Flex, { FlexDirection, FlexJustifying } from "@/components/flex"
import Grid from "@/components/grid"
import Card from "@/components/card"
import Jumbotron from "@/components/jumbotron"


const Home = async () => {
    const DISCORD = await GetContactByName(ContactName.Discord)
    const services = await GetAllMajorServcies()

    return (
        <main>

            <Jumbotron>
                <h1 className="typo1">Kod1ngclub</h1>
                <p className="text">코딩 동아리를 위한 코딩 동아리</p>
                <Flex direction={FlexDirection.Row} justifying={FlexJustifying.Center}>
                    <Link className="link" href={DISCORD.link}>Discord에 참가하기</Link>
                </Flex>
            </Jumbotron>

            
            <div className="resbody pt-3">
                <Grid>
                    { services.map(item => ( <Card title={item.name} description={item.description} link={item.link} /> ))}
                </Grid>
            </div>
        </main>
    )
}

export default Home
