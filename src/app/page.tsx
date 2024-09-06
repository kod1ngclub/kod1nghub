// model and service
import { ContactName } from "@/model/contact"

import { GetAllMajorServcies } from "@/service/service"
import { GetContactByName  } from "@/service/contact"

// components
import Flex, { FlexDirection, FlexJustifying } from "@/components/flex"
import Grid from "@/components/grid"
import Card from "@/components/card"
import Jumbotron from "@/components/jumbotron"

import Link from "next/link"

// utils
import { NewID } from "@/utils/id"

const Home = async () => {
    const DISCORD = await GetContactByName(ContactName.Discord)
    const services = await GetAllMajorServcies()

    return (
        <main>

            <Jumbotron>
                <h1 className="typo1">Kod1ngclub</h1>
                <p className="text mb-2">코딩 동아리를 위한 코딩 동아리</p>

                <Flex direction={FlexDirection.Row} justifying={FlexJustifying.Center}>
                    <Link className="link" href={DISCORD.link}>Discord에 참가하기</Link>
                </Flex>
                <p className="text">아니면 아래에서 서비스 둘러보기</p>
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
