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

const SITENAME      = "Kod1nghub"
const TITLE         = "Kod1nghub | Contact"
const DESCRIPTION   = "Contacts for Kod1ngclub"
const KEYWORD       = ["kod1ngclub", "codingclub", "coding", "club", "contact"]

const SITE_URL      = "https://kod1nghub.vercel.app"
const ICON_URL      = "/meta/icon.png"
const OPENGRAPH_URL = "/meta/opengraph.png"

const SITE_LOCALE   = "ko_KR"
const SITE_TYPE     = "website"

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: TITLE,
    description: DESCRIPTION,
    icons: {
        icon: ICON_URL
    },
    keywords: KEYWORD,
    alternates: {
        canonical: SITE_URL
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        siteName: SITENAME,
        locale: SITE_LOCALE,
        type: SITE_TYPE,
        url: SITE_URL,
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
    },
    verification: { google: process.env.GOOGLE_SITE_VERTIFICATION }
}

export const revalidate = 60
