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

export const revalidate = 60
