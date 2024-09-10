// model and service
import { ContactName } from "@/model/contact"

import { GetContactByName } from "@/service/contact"

// components
import Grid from "@/components/grid"
import Flex, { FlexDirection, FlexJustifying } from "@/components/flex"

import { DiscordIcon } from "@/components/icon/discord"
import { EmailIcon } from "@/components/icon/email"
import { PhoneIcon } from "@/components/icon/phone"

import Link from "next/link"

// utils
import { Metadata } from "next"

const Contact = async () => {
    const discord = await GetContactByName(ContactName.Discord)
    const email = await GetContactByName(ContactName.Email)
    const phone = await GetContactByName(ContactName.Phone)
    
    return (
        <main>
            <h3 className="typo3 my-3 tstyl-center">Contact with ...</h3>
            <Grid>
                <Link className="link" href={discord.link}>
                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <DiscordIcon color={null} size={64} />
                        <span className="text">Discord</span>
                    </Flex>
                </Link>
                
                <Link className="link" href={email.link}>
                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <EmailIcon color={null} size={64} />
                        <span className="text">Email</span>
                    </Flex>
                </Link>

                <Link className="link" href={phone.link}>
                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <PhoneIcon color={null} size={64} />
                        <span className="text">Phone Call</span>
                    </Flex>
                </Link>
            </Grid>
        </main>
    )
}

export default Contact

type SiteType               = "website" | "book" | "profile"
const SITE_URL              = process.env.SITE_URL as string
const SITE_NAME             = process.env.SITE_NAME as string
const SITE_LOCALE           = process.env.SITE_LOCALE as string
const SITE_TYPE             = process.env.SITE_TYPE as SiteType
const SITE_ICON_URL         = process.env.SITE_OPENGRAPH_URL as string
const SITE_OPENGRAPH_URL    = process.env.SITE_OPENGRAPH_URL as string

const PAGE_TITLE            = `${SITE_NAME} | Contact`
const PAGE_DESCRIPTION      = "Contacts for Kod1ngclub"
const PAGE_KEYWORD          = ["kod1ngclub", "codingclub", "coding", "club", "contact"]

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
