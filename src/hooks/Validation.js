export function Email(_email){
    const [user_name, full_domain] = _email.split('@')

    const [mail_server, domain] = full_domain.split('.')

    const user_name_validation = /[a-zA-Z._]+[0-9]*[a-zA-Z._]+/
    const mail_server_validation = /[a-z]+/
    const domain_validation = /[a-z]+/

    if(!user_name.length){
        return {
            message: ['Username part cannot be empty','Ім\'я користувача не може бути пустим'],
            ok: false,
        }
    }
    else if (!mail_server.length){
        return {
            message: ['Mail server part cannot be empty','Сервер не може бути пустим'],
            ok: false,
        }
    }
    else if (!domain.length){
        return {
            message: ['Domain part cannot be empty','Домен не може бути пустим'],
            ok: false,
        }
    }
    else if(!user_name.match(user_name_validation)){
        return {
            message: ['User name must contain only letters and numbers','Ім\'я куристувача мусить містити лише літери та цифри'],
            ok: false,
        }
    }
    else if(!mail_server.match(mail_server_validation)){
        return {
            message: ['Mail server must contain only letters in lowercase','Сервер мусить містити лише малі літери'],
            ok: false,
        }
    }
    else if(!domain.match(domain_validation)){
        return {
            message: ['Domain must contain only letters in lowercase','Домен мусить містити лише малі літери'],
            ok: false,
        }
    }
    else if(domain.length >= 2 && domain.length <= 4){
        return {
            message: ['Domain must be at least 2 letters long and shorter than 4 letters','Домен мусить містити від 2 до 4 літер'],
            ok: false,
        }
    }
    else{
        return {
            message:'',
            ok:true
        }
    }
}
export function Password(_password){
    if(_password.length < 8 ){
        return {
            message: ['Password is too short. It should be at least 8 characters long','Пароль закороткий. Пароль мусить бути принаймні 8 символів'],
            ok: false,
        }
    }
    else if(_password.length > 20 ){
        return {
            message: ['Password is too long. It should be shorter than 20 characters','Пароль задовгий. Пароль мусить бути менше, ніж 20 символів'],
            ok: false,
        }
    }
    else if(!_password.match(/[A-Z]/)){
        return {
            message: ['Password must contain at least one uppercase letter','Пароль мусить містити принаймні одну велику літеру'],
            ok: false,
        }
    }
    else if(!_password.match(/[a-z]/)){
        return {
            message: ['Password must contain at least one lowercase letter','Пароль мусить містити принаймні одну малу літеру'],
            ok: false,
        }
    }
    else if(!_password.match(/[0-1]/)){
        return {
            message: ['Password must contain at least one number','Пароль мусить містити принаймні одну цифру'],
            ok: false,
        }
    }
    else{
        return {
            message: '',
            ok:true,
        }
    }
}

