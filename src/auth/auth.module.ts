import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { EnvSchema } from "../env";


@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService<EnvSchema, true>) => ({
                secret: configService.get<string>('JWT_SECRET', { infer: true }),
                signOptions: { expiresIn: '60m' },
            }),
        }),
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class AuthModule {

}