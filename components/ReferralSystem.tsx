import { useState } from "react"

interface ReferralSystemProps {
    initData: string
    userId: string
    startParam: string
}

const ReferralSystem: React.FC<ReferralSystemProps> = ({ initData, userId, startParam }) => {
    const [referrals, setReferrals] = useState<string[]>([])
    const [referrer, setReferrer] = useState<string | null>(null)
    const INVITE_URL = "https://t.me/bbookkeee_bot/start"

    return (
        <>
        </>
    )
}

export default ReferralSystem