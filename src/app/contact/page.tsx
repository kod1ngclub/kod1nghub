import { ContactName } from "@/model/contact"

import { GetContactByName } from "@/service/contact"

// components
import Grid from "@/components/grid"
import Flex, { FlexDirection, FlexJustifying } from "@/components/flex"

// icon components
import { DiscordIcon } from "@/components/icon/discord"
import { EmailIcon } from "@/components/icon/email"

// next components
import Link from "next/link"

const Contact = async () => {
    const discord = await GetContactByName(ContactName.Discord)
    const email = await GetContactByName(ContactName.Email)
    
    return (
        <main>
            <h3 className="typo3 my-3 tstyl-center">Contact with ...</h3>
            <Grid>
                <Link className="link" href={discord.link}>
                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <DiscordIcon color={null} size={64} />
                        <span className="text">{discord.name}</span>
                    </Flex>
                </Link>
                
                <Link className="link" href={email.link}>
                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <EmailIcon color={null} size={64} />
                        <span className="text">{email.name}</span>
                    </Flex>
                </Link>
            </Grid>        
        </main>
    )
}

export default Contact
