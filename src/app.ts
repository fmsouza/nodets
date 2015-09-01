declare var process, Config;
import Factory    = require("./common/factory");
import Logger     = require("./common/logger");
import Router     = require("./core/router");
import MailServer = require("./core/mail/mailServer");
import MailObject = require("./core/mail/mailObject");
import Utils      = require("./common/tools/utils");

/**
 * Main application process.
 * @class App
 */
class Application{

    /**
     * Init application
     *
     * @method main
     * @param {string[]} argv - Process arg list
     * @return {void}
     */
    public static main(argv: string[]): void{
        
        var logger: Logger = Factory.getRuntimeLogger();
        logger.info('Starting the server...');

        // Configuring the RESTful router to handle HTTP requests
        var router: Router = new Router();
        router.registerResources(Config.resources); // Registering resources to handle the URLs
        
        var environment: any = Config.isProduction()?
         Config.environment.production : Config.environment.development;
         
        router.start(environment.ip, environment.port); // Starting RESTful application
    }

    /**
     * Handles 'uncaughtException' and reports through e-mail 
     * @method handleFatalError
     * @return {void}
     */
    public static handleFatalError(): void{
        process.on('uncaughtException', (error: any) => {
            
            var msgConfig: any = Config.errorMailMessage;
            var mail: MailObject = new MailObject();
            mail.setFromAddress(msgConfig.from);
            mail.setToAddress(msgConfig.to);
            mail.setSubject(msgConfig.subject);
            mail.setMessage(Utils.replacePattern(/\$\$/, error.stack, msgConfig.text));
            
            var mailServer: MailServer = new MailServer();
            mailServer.sendMail(mail, (error, message) =>{
                if(error) console.log(error);
                if(message) console.log(message);
            });
        });
    }
}

export = Application;