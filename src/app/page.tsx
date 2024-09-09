// model and service
import { GetAllMajorServcies } from "@/service/service"

// components
import Grid from "@/components/grid"
import Card from "@/components/card"
import Jumbotron from "@/components/jumbotron"

// utils
import { NewID } from "@/utils/id"

import { Metadata } from "next"

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

const SITENAME      = "Kod1nghub"
const TITLE         = "Kod1nghub | Home"
const DESCRIPTION   = "A coding club for coding club"
const KEYWORD       = ["kod1ngclub", "codingclub", "coding", "club"]

const URL           = "https://kod1nghub.vercel.app"
const ICON_URL      = "/meta/icon.png"
const OPENGRAPH_URL = "/meta/opengraph.png"

const SITE_LOCALE   = "ko_KR"
const SITE_TYPE     = "website"

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    icons: {
        icon: ICON_URL
    },
    keywords: KEYWORD,
    alternates: {
        canonical: URL
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        siteName: SITENAME,
        locale: SITE_LOCALE,
        type: SITE_TYPE,
        url: URL,
        images: {
            url: OPENGRAPH_URL
        }
    },
    twitter: {
        title: TITLE,
        description: DESCRIPTION,
        images: {
            url: OPENGRAPH_URL
        }
    }
}

export const revalidate = 60
