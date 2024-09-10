// model and service
import { GetAllMajorServcies } from "@/service/service"

// components
import Grid from "@/components/grid"
import Card from "@/components/card"
import Jumbotron from "@/components/jumbotron"

// utils
import { NewID } from "@/utils/id"

import { Metadata } from "next"
import { URL, Url } from "url"

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

type SiteType               = "website" | "book" | "profile"
const SITE_URL              = process.env.SITE_URL as string
const SITE_NAME             = process.env.SITE_NAME as string
const SITE_LOCALE           = process.env.SITE_LOCALE as string
const SITE_TYPE             = process.env.SITE_TYPE as SiteType
const SITE_ICON_URL         = process.env.SITE_OPENGRAPH_URL as string
const SITE_OPENGRAPH_URL    = process.env.SITE_OPENGRAPH_URL as string

const PAGE_TITLE            = `${SITE_NAME} | Home`
const PAGE_DESCRIPTION      = "A coding club for coding club"
const PAGE_KEYWORD          = ["kod1ngclub", "codingclub", "coding", "club"]

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    icons: {
        icon: SITE_ICON_URL
    },
    keywords: PAGE_KEYWORD,
    alternates: {
        canonical: SITE_URL
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        siteName: SITE_NAME,
        locale: SITE_LOCALE,
        type: SITE_TYPE,
        url: SITE_URL,
        images: {
            url: SITE_OPENGRAPH_URL
        }
    },
    twitter: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        images: {
            url: SITE_OPENGRAPH_URL
        }
    },
    verification: { google: process.env.GOOGLE_SITE_VERTIFICATION }
}

export const revalidate = 60
