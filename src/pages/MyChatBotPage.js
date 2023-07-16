import '../components/MyChatBot/MyChatBot.scss';
import ChatGPTCloner from "../components/MyChatBot/ChatGPTCloner";

function MyChatBotPage() {
    return (
        <>

            <div>
                <div className='flashing-rainbow-heading'>
                    <h2>ChatGPT Cloner</h2>
                </div>
                <ChatGPTCloner />
            </div>

        </>
    )
}
export default MyChatBotPage;